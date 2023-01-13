import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-govermentposition',
  templateUrl: './govermentposition.component.html',
  styleUrls: ['./govermentposition.component.sass']
})
export class GovermentpositionComponent {
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
