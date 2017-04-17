package com.czeczotka.bdd.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		//dryRun=true,
        format = { "pretty", "html:target/cucumber" },
        glue = "com.czeczotka.bdd.steps",
        //tags={"@smoketest"},
        features= {"classpath:cucumber/example.feature"}
        
        //features = {"classpath:cucumber/registration.feature"}
       //features = {"classpath:cucumber/registration.feature","classpath:cucumber/login.feature","classpath:cucumber/loginScenarioOutline.feature"}
)
public class RunTest {
}
