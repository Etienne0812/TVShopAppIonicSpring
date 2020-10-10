import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTvPage } from './add-tv.page';

describe('AddTvPage', () => {
  let component: AddTvPage;
  let fixture: ComponentFixture<AddTvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
