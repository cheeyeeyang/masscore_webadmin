import { Component } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
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
  //create modal
  opencreateModal(){
   $('#modal-add').modal('show');
  }
  closecreateModal(){
    $('#modal-add').modal('hide');
  }
  //edit modal
  openeditModal(){
    $('#modal-edit').modal('show');
   }
   closeeditModal(){
     $('#modal-edit').modal('hide');
   }
   //delete modal
   opendeleteModal(){
    $('#modal-delete').modal('show');
   }
   closedeleteModal(){
     $('#modal-delete').modal('hide');
   }
}
