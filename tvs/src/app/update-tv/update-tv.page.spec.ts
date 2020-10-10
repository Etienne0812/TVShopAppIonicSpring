import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateTvPage } from './update-tv.page';

describe('UpdateTvPage', () => {
  let component: UpdateTvPage;
  let fixture: ComponentFixture<UpdateTvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateTvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
