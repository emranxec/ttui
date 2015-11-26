package com.walmart;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam; 

@Path("/files")
public class FileUploadService {
@POST
@Path("/upload")
@Consumes(MediaType.MULTIPART_FORM_DATA)
 
public Response uploadFile(@FormDataParam("file") InputStream UploadedInputStream,
@FormDataParam("file") FormDataContentDisposition fileDetail){
	String fileLocation= "c://" +fileDetail.getFileName();
	try{
	
		FileOutputStream out=new FileOutputStream(new File(fileLocation));
		
		int read=0;
		byte[] bytes=new byte[1024];
		out=new FileOutputStream(new File(fileLocation));
		while((read=UploadedInputStream.read(bytes))!=-1){
		out.write(bytes, 0, read);
		
		}
		out.flush();
		out.close();
	}catch(IOException e){e.printStackTrace();}
	
	String Output="File succesfully uploaded to" + fileLocation;
	
	
		return Response.status(200).entity(Output).build();
	
}
}
