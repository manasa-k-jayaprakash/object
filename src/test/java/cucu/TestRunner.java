package cucu;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Handson\\Cucumber\\src\\resources\\java\\sample7.feature",
plugin= {"html:target/Reports"})
public class TestRunner {
  
}
