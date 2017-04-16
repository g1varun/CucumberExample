$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/example.feature");
formatter.feature({
  "line": 1,
  "name": "This is working examples",
  "description": "",
  "id": "this-is-working-examples",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "This is sceanario to match the first one and get Cucumber to give us a stub implementation of the second one.",
  "description": "",
  "id": "this-is-working-examples;this-is-sceanario-to-match-the-first-one-and-get-cucumber-to-give-us-a-stub-implementation-of-the-second-one.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have a cucumber step",
  "keyword": "Given "
});
formatter.match({
  "location": "example.displayReports()"
});
formatter.result({
  "duration": 225493838,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "The sum of a list of numbers should be calculated \u003cUsing Simple List\u003e",
  "description": "",
  "id": "this-is-working-examples;the-sum-of-a-list-of-numbers-should-be-calculated-\u003cusing-simple-list\u003e",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "a list of numbers",
  "rows": [
    {
      "cells": [
        "17"
      ],
      "line": 8
    },
    {
      "cells": [
        "42"
      ],
      "line": 9
    },
    {
      "cells": [
        "4711"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I should get 4770",
  "keyword": "Then "
});
formatter.match({
  "location": "example.calculate(Integer\u003e)"
});
formatter.result({
  "duration": 2923887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4770",
      "offset": 13
    }
  ],
  "location": "example.checksum(int)"
});
formatter.result({
  "duration": 4112469,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "A price list can be represented as price per item \u003cUsing Maps\u003e",
  "description": "",
  "id": "this-is-working-examples;a-price-list-can-be-represented-as-price-per-item-\u003cusing-maps\u003e",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "the price list for a coffee shop",
  "rows": [
    {
      "comments": [
        {
          "line": 15,
          "value": "#| Items  | Price |"
        }
      ],
      "cells": [
        "coffee",
        "1"
      ],
      "line": 16
    },
    {
      "cells": [
        "donut",
        "2"
      ],
      "line": 17
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I order 1 coffee and 1 donut",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "should I pay 3",
  "keyword": "Then "
});
formatter.match({
  "location": "example.pricelistofItems(String,Integer\u003e)"
});
formatter.result({
  "duration": 1228451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "coffee",
      "offset": 10
    },
    {
      "val": "1",
      "offset": 21
    },
    {
      "val": "donut",
      "offset": 23
    }
  ],
  "location": "example.userorder(int,String,int,String)"
});
formatter.result({
  "duration": 295270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 13
    }
  ],
  "location": "example.paymentDone(int)"
});
formatter.result({
  "duration": 172109,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "List of domain objects \u003cInstead of Data Table - Using List\u003e",
  "description": "",
  "id": "this-is-working-examples;list-of-domain-objects-\u003cinstead-of-data-table---using-list\u003e",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I have the following order using list",
  "rows": [
    {
      "cells": [
        "vegetable",
        "quantity",
        "cost"
      ],
      "line": 23
    },
    {
      "cells": [
        "cucumber",
        "4",
        "10"
      ],
      "line": 24
    },
    {
      "cells": [
        "carrot",
        "5",
        "6"
      ],
      "line": 25
    },
    {
      "cells": [
        "potato",
        "6",
        "4"
      ],
      "line": 26
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I purchase 4 cucumber and 6 potato",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "My cost is 14",
  "keyword": "Then "
});
formatter.match({
  "location": "example.userorder(OrderItem\u003e)"
});
formatter.result({
  "duration": 18906386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 11
    },
    {
      "val": "cucumber",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 26
    },
    {
      "val": "potato",
      "offset": 28
    }
  ],
  "location": "example.purchasePower(int,String,int,String)"
});
formatter.result({
  "duration": 281850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 11
    }
  ],
  "location": "example.cost(int)"
});
formatter.result({
  "duration": 3401925,
  "status": "passed"
});
});