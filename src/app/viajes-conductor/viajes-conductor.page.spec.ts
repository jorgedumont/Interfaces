import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViajesConductorPage } from './viajes-conductor.page';

describe('ViajesConductorPage', () => {
  let component: ViajesConductorPage;
  let fixture: ComponentFixture<ViajesConductorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesConductorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViajesConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
