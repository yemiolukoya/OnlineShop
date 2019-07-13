package com.mw.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
	@CucumberOptions(
			//features = "feature"
			features = "/Users/yemioluv/eclipse-workspace/onlineShop2/src/main/java/com/mw/feature/SignIn.feature"
			,glue={"com/mw/stepDefinitions"},
					format={"pretty", "html:test-output", "json:json_output/cuccmber.json", "junit:junit_xml/cucumber.xml" },
			monochrome = true,
			strict = true
					//dryRun = true
			
			)
	
	public class TestRunner {

}
