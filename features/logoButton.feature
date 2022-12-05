@wip
Feature: Search test

  Background:
      Given Open newegg homepage

  Scenario: Logo button
      When Open Todays Best Deals tab
           * Click on the Internet shop logo
      Then Check that the main page opened
