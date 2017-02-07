/* global MLSearchController */
(function () {
  'use strict';

  angular.module('app.search')
    .controller('SearchCtrl', SearchCtrl);

  SearchCtrl.$inject = ['$scope', '$location', 'MLSearchFactory', '$window'];

  // inherit from MLSearchController
  var superCtrl = MLSearchController.prototype;
  SearchCtrl.prototype = Object.create(superCtrl);

  function SearchCtrl($scope, $location, searchFactory, $window) {
    var ctrl = this;

    superCtrl.constructor.call(ctrl, $scope, $location, searchFactory.newContext());

    ctrl.init();

    ctrl.setSnippet = function(type) {
      ctrl.mlSearch.setSnippet(type);
      ctrl.search();
    };

  var initMapOptions = {
    center: new $window.google.maps.LatLng(52.3881895, 4.8447237),
    zoom: 8	,
    mapTypeId: $window.google.maps.MapTypeId.ROADMAP
  };

  ctrl.myMap = {
    map: null,
    options: angular.extend({}, initMapOptions),
    markers: [],
    selections: []
  };

  ctrl.boundsChanged = function() {
    // place your geospatial search code here, and make that update $scope.myFacets
  };

  ctrl.resetMap = function() {
    ctrl.myMap.options = angular.extend({}, initMapOptions);
    angular.forEach(ctrl.myMap.selections, function(overlay, index) {
      overlay.setMap(null);
    });
    ctrl.myMap.selections.length = 0;
  };

  ctrl.showResult = function(uri) {
    $window.alert('You clicked ' + uri);
  };

	ctrl.highchartConfig = {
      'options': {
        'chart': {
          'type': 'column'
        },
        'tooltip': {
          'style': {
            'padding': 10,
            'fontWeight': 'bold'
          }
        }
      },
      'title': {
        'text': 'Income by Gender'
      },
      'xAxis': {
        'title': {
          'text': 'Income'
        }
      },
      // constraint name for x axis
      'seriesNameMLConstraint': 'Gender',
      // optional constraint name for categorizing x axis values
      'xAxisCategoriesMLConstraint': 'Income',
      'yAxis': {
        'title': {
          'text': 'Frequency'
        }
      },
      // constraint name for y axis ($frequency is special value for value/tuple frequency)
      'yAxisMLConstraint': '$frequency',
      'zAxis': {
        'title': {
          'text': null
        }
      },
      'size': {
        'height': 600,
        'width': 600
      },
      // limit of returned results
      'resultLimit': 15
    };

	ctrl.highchartConfig1 = {
      'options': {
        'chart': {
          'type': 'column'
        },
        'tooltip': {
          'style': {
            'padding': 10,
            'fontWeight': 'bold'
          }
        }
      },
      'title': {
        'text': 'UserExperience by Gender'
      },
      'xAxis': {
        'title': {
          'text': 'UserExperience'
        }
      },
      // constraint name for x axis
      'seriesNameMLConstraint': 'Gender',
      // optional constraint name for categorizing x axis values
      'xAxisCategoriesMLConstraint': 'UserExperience',
      'yAxis': {
        'title': {
          'text': 'Frequency'
        }
      },
      // constraint name for y axis ($frequency is special value for value/tuple frequency)
      'yAxisMLConstraint': '$frequency',
      'zAxis': {
        'title': {
          'text': null
        }
      },
      'size': {
        'height': 600,
        'width': 600
      },
      // limit of returned results
      'resultLimit': 15
    };

	ctrl.highchartConfig2 = {
      'options': {
        'chart': {
          'type': 'column'
        },
        'tooltip': {
          'style': {
            'padding': 10,
            'fontWeight': 'bold'
          }
        }
      },
      'title': {
        'text': 'DeviceName by Income'
      },
      'xAxis': {
        'title': {
          'text': 'DeviceName'
        }
      },
      // constraint name for x axis
      'seriesNameMLConstraint': 'Income',
      // optional constraint name for categorizing x axis values
      'xAxisCategoriesMLConstraint': 'DeviceName',
      'yAxis': {
        'title': {
          'text': 'Frequency'
        }
      },
      // constraint name for y axis ($frequency is special value for value/tuple frequency)
      'yAxisMLConstraint': '$frequency',
      'zAxis': {
        'title': {
          'text': null
        }
      },
      'size': {
        'height': 600,
        'width': 600
      },
      // limit of returned results
      'resultLimit': 15
    };

	ctrl.highchartConfig3 = {
      'options': {
        'chart': {
          'type': 'column'
        },
        'tooltip': {
          'style': {
            'padding': 10,
            'fontWeight': 'bold'
          }
        }
      },
      'title': {
        'text': 'DeviceName by Gender'
      },
      'xAxis': {
        'title': {
          'text': 'DeviceName'
        }
      },
      // constraint name for x axis
      'seriesNameMLConstraint': 'Gender',
      // optional constraint name for categorizing x axis values
      'xAxisCategoriesMLConstraint': 'DeviceName',
      'yAxis': {
        'title': {
          'text': 'Frequency'
        }
      },
      // constraint name for y axis ($frequency is special value for value/tuple frequency)
      'yAxisMLConstraint': '$frequency',
      'zAxis': {
        'title': {
          'text': null
        }
      },
      'size': {
        'height': 600,
        'width': 600
      },
      // limit of returned results
      'resultLimit': 15
    };

  }
}());
