<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
</head>
<?php 
$students=[
  [
    'name'=>'hamid',
    'grade'=>'Bachelors degree'
  ],
  [
    'name'=>'reza',
    'grade'=>'high school'
  ],
  [
    'name'=>'mohammad',
    'grade'=>'elementary School'
  ],
  [
    'name'=>'mohsen',
    'grade'=>'PHD'
  ],
];
$count=0;
?>
<div class="col-md-4 m-4">
  <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>grade</td>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($students as $student) {?> 
          <tr>
            <td><?=++$count?></td>
            <td><?=$student['name']?></td>
            <td><?=$student['grade']?></td>
          </tr>
        <?php }?>
      </tbody>
  </table>
</div>