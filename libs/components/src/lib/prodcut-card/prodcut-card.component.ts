import {
  Component,
  inject,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  ComponentPortal,
  DomPortal,
  Portal,
  TemplatePortal,
  PortalModule,
  CdkPortalOutlet,
} from '@angular/cdk/portal';

@Component({
  selector: 'lib-prodcut-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    PortalModule,
    CdkPortalOutlet,
  ],
  templateUrl: './prodcut-card.component.html',
  styleUrl: './prodcut-card.component.scss',
})
export class ProdcutCardComponent {
  @ViewChild('templatePortalContent')
  templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('selectedPortal', { read: CdkPortalOutlet })
  selectedPortal!: CdkPortalOutlet;
  componentPortal!: ComponentPortal<any>;
  templatePortal!: TemplatePortal<any>;
  domPortal!: DomPortal<any>;

  private _viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
  viewProductImage() {
    if (null == this.templatePortal)
      this.templatePortal = new TemplatePortal(
        this.templatePortalContent,
        this._viewContainerRef
      );
    this.selectedPortal.attach(this.templatePortal);
  }

  closePopup() {
    this.selectedPortal.detach();
  }
}
