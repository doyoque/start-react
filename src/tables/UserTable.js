import React from 'react'

const UserTable = props => {

	var table = 
	  <table>
	    <thead>
	      <tr>
	        <th>Name</th>
	        <th>Username</th>
	        <th>Actions</th>
	      </tr>
	    </thead>
	    <tbody>
	    	{props.users.length > 0 ? (
	    		props.users.map(user => (
			      <tr>
			        <td>{user.name}</td>
			        <td>{user.username}</td>
			        <td>
			          <button className="button muted-button">Edit</button>
			          <button className="button muted-button">Delete</button>
			        </td>
			      </tr>
	    			))
	    		) : (
	    			<tr>
	    				<td colSpan={3}>No Users</td>
	    			</tr>
	    		)}
	    </tbody>
	  </table>

	return (
		table
	);
}

export default UserTable;