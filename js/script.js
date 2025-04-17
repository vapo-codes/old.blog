$(document).ready(function(){
    $('#submit').on('click',function(){
        var st = '';
        $('#myForm input[type=text],input[type=number]').each(function(){
            st = st+ '<td>'+$(this).val()+'</td>';
            $(this).val('');
        });
        $('#details').append('<tr>'+st+'</tr>');
    });
});

$(document).ready(function(){
    $('#dlt').on('click',function(){
      var table = document.getElementById('grades');
      var rowCount = table.rows.length;

      if(rowCount != 1)
        table.deleteRow(rowCount - 1);
    });
});