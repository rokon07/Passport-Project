	<?php include "templates/header.php"; ?><h2>Add a user</h2>

    <form method="post">
    	<label for="Name">Name</label>
    	<input type="text" name="Name" id="Name">
    	<label for="email">Date of Birth</label>
    	<input type="text" name="Date of Birth" id="Date of Birth">
	<td>Status :</td>
    <td>
     <select>
      <option>...Select...</option>
      <option>Passport</option>
      <option>Visa</option>
      <option>No Visa Required</option>
      <option>Dual Nationality Certificate</option>
      <option>Travel Permit</option>
     </select>
    </td>
    	<input type="submit" name="submit" value="Submit">
    </form>

    <a href="index.php">Back to home</a>

    <?php include "templates/footer.php"; ?>