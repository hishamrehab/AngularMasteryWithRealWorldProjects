import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [CommonModule, FormsModule]
})

export class SharedModule {}
