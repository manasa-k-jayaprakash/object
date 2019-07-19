package cucu;
import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefinition {
	@Given("^user must be registered$")
	public void user_must_be_registered() throws Throwable {
		System.out.println("user must be registered");
	}

	@When("^user enters the below credentails$")
	public void user_enters_the_below_credentails(DataTable arg1) throws Throwable {List<Map< String, String>> cred=arg1.asMaps(String.class, String.class);
	for(int i=0;i<cred.size();i++)
	{
		System.out.println(cred.get(i).get("username")+"\t"+cred.get(i).get("password"));
	}
  }

	@Then("^user must be in home page$")
	public void user_must_be_in_home_page() throws Throwable {
		System.out.println("user must be in the home page");
	}
}


