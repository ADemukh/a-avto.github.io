(function SelectCarComponentInit() {
  'use strict';

  angular.module(WEBUI_MODULE_NAME)
    .component('qSelectCar', {
      controller: 'controllers.slectcar',
      templateUrl: 'webui/common/select-car/select-car.tmpl.html',
      bindings: {
        car: '<',
        onChange: '&'
      }
    })
    .controller('controllers.slectcar', SelectCarController);

  SelectCarController.$inject = ['services.car'];

  function SelectCarController(carService) {
    var vm;

    vm = this;
    vm.$onInit = function onInit() {
      carService.getEngineCapacities().then(function onGetCapacities(engineCapacities) {
        vm.engineCapacities = engineCapacities;
      });
      carService.getGearboxes().then(function onGetGearboxes(gearboxes) {
        vm.gearboxes = gearboxes;
      });
      carService.getEngineTypes().then(function onGetEngineTypes(engineTypes) {
        vm.engineTypes = engineTypes;
      });

      loadMarks();
      vm.canChooseMark = canChooseMark;
      vm.canChooseModel = canChooseModel;
      vm.canChooseYear = canChooseYear;
      vm.updateMark = updateMark;
      vm.updateModel = updateModel;
      vm.updateYear = updateYear;
      vm.updateEngineType = updateEngineType;
      vm.updateEngineCapacity = updateEngineCapacity;
      vm.updateGearbox = updateGearbox;
      vm.updateVIN = updateVIN;
    };
    vm.$onChanges = function onChanges(changes) {
      if (changes.car) {
        vm.car = angular.copy(vm.car);
      }
      loadModels();
      loadYears();
    };

    function loadMarks() {
      carService.getCars().then(function onGetCars(marks) {
        vm.marks = marks;
      });
    }

    function loadModels() {
      if (vm.car && vm.car.mark) {
        carService.getCarModels(vm.car.mark).then(function onGetCars(models) {
          vm.models = models;
        });
      }
    }

    function loadYears() {
      if (vm.car && vm.car.mark && vm.car.model) {
        carService.getCarModelYears(vm.car.mark, vm.car.model).then(function onGetCars(years) {
          vm.years = years;
        });
      }
    }

    function canChooseMark() {
      return vm.marks && vm.marks.length;
    }

    function canChooseModel() {
      return vm.models && vm.models.length;
    }

    function canChooseYear() {
      return vm.years && vm.years.length;
    }

    function updateMark() {
      vm.car.model = null;
      vm.car.year = null;
      vm.models = [];
      vm.years = [];
      loadModels();
      triggerChanges();
    }

    function updateModel() {
      vm.car.year = null;
      vm.years = [];
      loadYears();
      triggerChanges();
    }

    function updateYear() {
      triggerChanges();
    }

    function updateEngineType() {
      triggerChanges();
    }

    function updateEngineCapacity() {
      triggerChanges();
    }

    function updateGearbox() {
      triggerChanges();
    }

    function updateVIN() {
      triggerChanges();
    }

    function triggerChanges() {
      vm.onChange({
        $event: {
          car: vm.car
        }
      });
    }
  }
})();