package com.walmart;

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("/Product")
public class ProductServices {
	
@POST
@Path("/add")
		public Response addUser(
				@FormParam ("id") int id,
				@FormParam("name") String name,
				@FormParam("price") Float price){
	
	return javax.ws.rs.core.Response.status(200).entity("Product added succesfully <br> id="+id+"name =" +name +"price =" +price ).build();
}
}
