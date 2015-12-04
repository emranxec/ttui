package com.wipro;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class tsd
 */
@WebServlet("/tsd")
public class tsd extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public tsd() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
			String name = request.getParameter("name");
		    String date = request.getParameter("date");
		    String plan = request.getParameter("plan");
			String detail = request.getParameter("detail");
			String compoff = request.getParameter("compoff");
			
			
			String[] time=request.getParameterValues("time");
			String[] comment=request.getParameterValues("comment");
			ArrayList<String> job = new ArrayList<String>();
			
			System.out.println("time : " + time.length);
			System.out.println("job1 :" + request.getParameter("job1"));
			System.out.println("job2 :" + request.getParameter("job2"));
			
			for(int i=1; i<=time.length;i++){
				System.out.println("job #: " + i);
				job.add(request.getParameter("job"+i));
			}
	
			System.out.println("job length : " + job.size());
			System.out.println("job value : " + job.toString());
		    System.out.println(name);
		    System.out.println(date);
		    System.out.println(plan);
		    System.out.println(detail);
		    
		    /*for(int i=1;i<=time.length;i++){
				  System.out.println("job: " + job[i]);
			    }*/
			  for(int i=0;i<time.length;i++){
				  System.out.println("time: " + time[i]);
			    }
			  for(int i=0;i<comment.length;i++){
				  System.out.println("comments: " + comment[i]);
			    }
		    
		    System.out.println(compoff);
	
	
	}

}
