@wip
Feature: Search test

  Background:
      Given Open newegg homepage

  Scenario: Search windows
      When Enter windows into search bar and pressing search
      Then I am checking that at least one item is present

