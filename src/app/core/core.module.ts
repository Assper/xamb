import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SheetService } from './services/sheet.service'

@NgModule({
  imports: [CommonModule],
  providers: [SheetService]
})
export class CoreModule {}
