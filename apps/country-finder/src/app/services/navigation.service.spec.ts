import { Router } from '@angular/router';
import { NavigationService, Pages } from "./navigation.service";

describe('navigation service tests', () => {

    let navigationService: NavigationService;
    let routerStub: Router;

    beforeEach(() => {
        routerStub = {
            navigate: jest.fn(),
        } as unknown as Router;
        navigationService = new NavigationService(routerStub);
    });

    it('navigateTo should send the page and the id to angular router as array', () => {
        navigationService.navigateTo(Pages.CONTINENTS, '1234');

        expect(routerStub.navigate).toHaveBeenCalledWith([Pages.CONTINENTS, '1234']);
    });

    it('goHome should redirect the user to the homepage', () => {
        navigationService.goHome();

        expect(routerStub.navigate).toHaveBeenCalledWith(['']);
    });
});
