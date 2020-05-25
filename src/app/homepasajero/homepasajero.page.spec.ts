import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomepasajeroPage } from './homepasajero.page';

describe('HomepasajeroPage', () => {
  let component: HomepasajeroPage;
  let fixture: ComponentFixture<HomepasajeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepasajeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomepasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
