var app = angular.module("myApp", ['angularUtils.directives.dirPagination']);
app.controller("myController", function ($scope) {
    $scope.hocSinh = [
        { hoTen: "Nam", tuoi: new Date(2004, 01, 01), lop: "--Lop 10A1" },
        { hoTen: "Bede", tuoi: new Date(2006, 01, 01), lop: "--Lop 10A2" },
        { hoTen: "Hoho", tuoi: new Date(2003, 01, 01), lop: "--Lop 10A2" },
        { hoTen: "Kaka", tuoi: new Date(2002, 01, 01), lop: "--Lop 11A1" },
        { hoTen: "Benben", tuoi: new Date(2004, 01, 01), lop: "--Lop 11A2" },
        { hoTen: "Lunu", tuoi: new Date(2005, 01, 01), lop: "--Lop 12A1" },
        { hoTen: "Lpaa", tuoi: new Date(2001, 01, 01), lop: "--Lop 12A2" },
    ];
    
    $scope.lop_x = [
        { tenLop: "Lop 10A1", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 11A1", thuoc: "Lop 11" },
        { tenLop: "Lop 11A2", thuoc: "Lop 11" },
        { tenLop: "Lop 12A1", thuoc: "Lop 12" },
        { tenLop: "Lop 12A2", thuoc: "Lop 12" },
        { tenLop: "Lop 10A1", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 11A1", thuoc: "Lop 11" },
        { tenLop: "Lop 11A2", thuoc: "Lop 11" },
        { tenLop: "Lop 12A1", thuoc: "Lop 12" },
        { tenLop: "Lop 12A2", thuoc: "Lop 12" },
        { tenLop: "Lop 10A1", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 11A1", thuoc: "Lop 11" },
        { tenLop: "Lop 11A2", thuoc: "Lop 11" },
        { tenLop: "Lop 12A1", thuoc: "Lop 12" },
        { tenLop: "Lop 12A2", thuoc: "Lop 12" },
        { tenLop: "Lop 10A1", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 11A1", thuoc: "Lop 11" },
        { tenLop: "Lop 11A2", thuoc: "Lop 11" },
        { tenLop: "Lop 12A1", thuoc: "Lop 12" },
        { tenLop: "Lop 12A2", thuoc: "Lop 12" },
    ];
    $scope.lop_y = [
        "Lop ",
        "Lop 10", "--Lop 10A1", "--Lop 10A2",
        "Lop 11", "--Lop 11A1", "--Lop 11A2",
        "Lop 12", "--Lop 12A1", "--Lop 12A2",
    ];
    $scope.Class = [
        "--Lop 10A1", "--Lop 10A2",
        "--Lop 11A1", "--Lop 11A2",
        "--Lop 12A1", "--Lop 12A2"
    ];
    $scope.khoi = [
        "Lop 10",
        "Lop 11",
        "Lop 12"
    ];

    $scope.change_Main_Add = true;
    $scope.change_Main_Edit = true;
    $scope.main = true;
    $scope.extra = true;
    $scope.change_Extra_Add = true;
    $scope.change_Extra_Edit = true;
    $scope.change_Tab_Hoc_Sinh = function () {
        $scope.main = true;//hien main
        $scope.change_Main_Add = true;//an add
        $scope.change_Main_Edit = true;//an edit
        $scope.extra = true;//an extra
        $scope.change_Extra_Add = true;//an add extra
        $scope.change_Extra_Edit = true;//an edit extra
    };
    $scope.change_Tab_Lop = function () {
        $scope.main = false;//an main
        $scope.change_Main_Add = true;// an add 
        $scope.change_Main_Edit = true;// an edit 

        $scope.extra = false;//hien extra
        $scope.change_Extra_Add = true;//an add extra
        $scope.change_Extra_Edit = true;//an edit extra
    };

    //Tab Hoc Sinh
    $scope.edit = function (hs) {
        $scope.change_Main_Edit = false;
        $scope.main = false;
        $scope.hs = hs;
    };
    $scope.saveEdit = function () {
        $scope.change_Main_Edit = true;
        $scope.main = true;
    };
    //Them moi hoc sinh
    $scope.add = function () {
        $scope.change_Main_Add = false;
        $scope.main = false;
    };
    $scope.saveAdd = function (hoTen, tuoi, lop) {
        // var c = new Date().getFullYear() - new Date(tuoi).getFullYear();
        var c = $scope.calculateAge(tuoi);
        var x = { hoTen: hoTen, tuoi: tuoi, lop: lop };
        $scope.hocSinh.push(x);
        $scope.change_Main_Add = true;
        $scope.main = true;

        $scope.hoTen = null;
        $scope.tuoi = null;
        $scope.lop = null;
        // $scope.hoc_Sinh_Default = angular.copy($scope.hocSinh);
        $scope.hoc_Sinh_Default.push(x);
        alert(angular.toJson($scope.hocSinh));
    };
    $scope.delete = function (hs) {
        var index = $scope.hocSinh.indexOf(hs);
        $scope.hocSinh.splice(index, 1);
    };
    // $scope.data = {};
    // $scope.inputData = {};
    // $scope.applySearch = function () {
    //     for (prop in $scope.inputData) {
    //         $scope.data[prop] = $scope.inputData[prop];
    //     }
    // };

    $scope.calculateAge = function (birthday) {
        return (new Date().getFullYear()) - (new Date(birthday).getFullYear());
    }
    $scope.hoc_Sinh_Default = angular.copy($scope.hocSinh);
    $scope.inputData = {};
    $scope.applySearch = function () {
        var name = $scope.inputData.hoTen;
        var age = $scope.inputData.tuoi;
        var clas = $scope.inputData.lop;
        $scope.hocSinh = angular.copy(_.filter($scope.hoc_Sinh_Default,
            function (x) {
                return ((age === null || age === undefined) || (age !== null && age !== undefined && $scope.calculateAge(x.tuoi) == age)) &&
                    ((clas === null || clas === undefined) || (clas !== null && clas !== undefined && x.lop.includes(clas))) &&
                    ((name === null || name === undefined) || (name !== null && name !== undefined && x.hoTen.includes(name)));
            }));
            alert(angular.toJson($scope.hocSinh));
    };

    //Tab Class
    $scope.deleteClass = function (lop) {
        var index = $scope.lop_x.indexOf(lop);
        $scope.lop_x.splice(index, 1);
    };
    $scope.addClass = function () {
        $scope.extra = true;
        $scope.change_Extra_Add = false;
    }
    $scope.saveAddClass = function (tenLop, thuoc) {
        $scope.lop_x.push({ tenLop: tenLop, thuoc: thuoc });
        $scope.lop_y.push($scope.tenLop);
        $scope.Class.push($scope.tenLop);
        $scope.change_Extra_Add = true;
        $scope.extra = false;
        
        $scope.tenLop = null;
        $scope.thuoc = null;
        
    };
    $scope.editClass = function (lop_x) {
        $scope.h = lop_x;
        $scope.extra = true;
        $scope.change_Extra_Edit = false;
    }
    $scope.saveEditClass = function (lop_x) {
        $scope.change_Extra_Edit = true;
        $scope.extra = false;
    };
});