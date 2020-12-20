import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ContinentsService } from '../../services/continents.service';
import { ContinentsComponent } from './continents.component';
import { MockComponent } from 'ng-mocks';
import { ListComponent } from '../shared/list.component';
import { LoadingComponent } from '../shared/loading.component';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Continent } from '@pfc/wbconsumer';

describe('continents component tests', () => {

    let fixture: ComponentFixture<ContinentsComponent>;
    let compiled;
    const continentMock = {
        id: '1234',
        code: 'EN',
    } as unknown as Continent;
    const continentsServiceStub = {
        getContinents$: () => of([continentMock]).pipe(delay(100)),
        selectRegion: jest.fn(),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ContinentsComponent,
                LoadingComponent,
                MockComponent(ListComponent),
            ],
            providers: [
                { provide: ContinentsService, useValue: continentsServiceStub }
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(ContinentsComponent);
        compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
    });
    
    it('should display the welcome text and loading spinner', () => {
        const welcomeText = compiled.querySelector('h1');
        const spinner = compiled.querySelector('c-finder-loading');
        expect(welcomeText.textContent).toEqual('¡Welcome to Country Finder! Select the region');
        expect(spinner).toBeTruthy();
    });
    
    describe('Given the continents are loaded', () => {

        async function awaitContinentsAreLoaded(): Promise<void> {
            await new Promise<void>((resolve) => setTimeout(() => resolve(), 200));
            fixture.detectChanges();
        } 
        
        beforeEach(async () => {
            await awaitContinentsAreLoaded();
        });
        it('then should display the list', () => {
            const continentsList = compiled.querySelector('c-finder-list');
            expect(continentsList).toBeTruthy();
        });

        it('selectContinent should calls continents service', () => {
            const component = fixture.componentInstance;
            component.selectContinent(continentMock);

            expect(continentsServiceStub.selectRegion).toHaveBeenCalledWith(continentMock);
        });
    });
});
