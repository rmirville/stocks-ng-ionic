import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';

import { NotesPage } from './notes.page';

describe('HomePage', () => {
  let component: NotesPage;
  let fixture: ComponentFixture<NotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotesPage],
      imports: [IonicModule.forRoot(), SharedModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
