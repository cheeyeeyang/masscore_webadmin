import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-oganizationposition',
  templateUrl: './oganizationposition.component.html',
  styleUrls: ['./oganizationposition.component.sass']
})
export class OganizationpositionComponent {
  ngAfterViewInit(){
    $(document).ready(function(){
    $("#example1").DataTable({
      "responsive": true, "lengthChange": false, "autoWidth": false,
      // "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
    });
  });
}
}
