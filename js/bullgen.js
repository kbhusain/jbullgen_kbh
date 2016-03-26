// JavaScript Document

var bullgenApp=angular.module('bullgenApp',[]);




bullgenApp.controller("bullController", function($scope) { 


  $scope.mygoals = [
      { name:  "Demo", items: "Mine"},       
      { name:  "Demo", items: "Mine"} ,      
      { name:  "Demo", items: "Mine"}       
      ];
 
  $scope.userInfo = "Kamran Husain";
  $scope.userAddress = "PEASD/SSD, DOB-7765";
  $scope.userPhone = "Tel: 013-874-7898";
  $scope.atTime =   new Date().toDateString();
  $scope.reportTitle = "Report";
  $scope.projectTitle = "Project";
  $scope.fillers = [ 'and', 'and','and','incorporating', 'with', 'using', 'utilizing', 'with the help of' , 'with', 'and', 'with'];
  $scope.nouns = [ 'action-items', 'applications', 'architectures',    'Linux utilities', 'deliverables', 'ASP', 'awk',  'e-markets', 'e-services','Visual C++', 'scripts',  'interfaces', 'methodologies', 'metrics', 'models',           'networks', 'paradigms', 'user comments', 'platforms', 'linux portals', 
                    'Python', 'Java', 'Wscript', 'Shell Scripts', 'Unix technologies',   'user input', 'Visual Basic', ];
  $scope.projects = ['Sim Builder', 'KH Conditioning', 'Model Scanner Project', 'Petrel Clone' ];

   $scope.bs_statements= [
          "This workflow was developed and deployed with the latest working tools.",
          "Results of these well test analyses will help to optimize time required to observe and quantify reservoir parameters.",
          "The old workflow was developed by hard coded of input parameters which always posed a challenge and difficulties in applying the same workflow for different projects. The re-engineered workflow enables IRS engineers to easily change the input parameters based on different fields data and will facilitate efficient and prompt support of this workflow.",
          "This work is used to automate streamline and optimize the development, preparation, analysis, revision, sensitivity, approval, distribution and presentation of long-term Business Plans.",
          "The objective of this workflow is to allocate productions, deviations and markers data to the lateral level for each well.",
          "Our work discusses how and best methodology to manage the ever increasing well log data, and standardize on well log data quality controls. ",
          "This will allow reservoir management engineers to access these logs within the application, correlate them in time/space dimensions, and incorporate production data for more comprehensive data analysis.",
          "Deployed to production the latest enhanced version of well log data management.  ",
          "The system streamlines the process of tracking, reporting and storing the PE&D Restricted KPIs.",
          "The  application streamlines the base process by integrating different land use permit workflows providing improved efficiency through automated task assignment and notification for pending tasks. ",
          "This will yield to more effective analysis and optimum planning for the Single Business Plan process, with seamless integration with any pending change request.",
          "Deployed web-enabled system that facilitates development and analysis of different business plan scenarios by dynamically creating and allocating wells based on the corporate business planning constraints.",
          "The objective of this project is to centralize all well log data into this corporate repository hosting raw, processed and analyzed well log data.",
          "It serves as base line for future data analytics providing upstream professional their needs upon data availability.",
          "The migration will start with raw well log data out of our data store moving to processed well logs out of processing environments.",
          "Application streamlines the process by integrating different land use permit workflows providing improved efficiency through automated task assignment and notification for pending tasks.",
          "These added enhancements are part of major application overall optimization and automation re-engineering to streamline the well approval complete cycle from well proposal to drilling with clear accountability of all stakeholders as well as to provide engineers with optimal performance and user experience while satisfying ever increasing business requirements.",
          "The system automatically matches the ideal market share for each service company based on groups of indices. ",
          "The system involved performing complex calculations depending on data gathered from multiple sources such as financial data.",
          "The system will be moved to production by first of December upon successful completion of the user acceptance test.",
          "Deployed for user acceptance test the system. ",
          "The objective was to identify the approved master repositories utilized by the upstream professionals and locate the duplicate well log data. ",
          "In addition various well properties like stimulation, log, core etc. are pulled from other optimization system and integrated into various analytical tools",
          "Used a dashboard for visualizing the KPIs, and audit trails reporting features. ",
          "Reporting module that allows authorized users to display the restricted KPIs and drill-down to the scorecards of PE systems.",
          "The system streamlines the process of tracking, reporting and storing the Restricted KPIs.",
          "This release automatically adjusts KPIs based on reservoir and field properties.",
          "Optimizes using various diagnostic parameters, including the subjective input of the parameters by senior reservoir engineers.",
          "A plan was put in place to eliminate all these duplicates in a series of steps in order to ensure that any analysis done is unaffected.",
          "This will result in a more optimized processed well log repository which will largely reduce searching time and effort for well logs data.",
          "A comprehensive document that contains all the details of this study and the roadmap to a unified data repository is being compiled and will be shared with the data proponent for their concurrence.",
          "This is part of the Data Governance requirements to include all processed well logs into a single and unified repository.  "          ];


 $scope.actionItems = [ 'solutions', 'ECL reader utilities',
 'PBF reader utilities', '3D viewer components',
          'Python classes', 'member functions', 'virtual classes', 'documentation', 'GLK utilities', 
          'Python modules', '2D viewer components', 'charting functions',
          'equation editor functions'];
      

        $scope.adjectives = [ 'cross-platform', 'multi-platform', 
        'fast', 'cutting-edge', 'distributed', 'dynamic',
        'unix', 'front-end', 'global', 'granular', 'holistic',
        'impactful', 'innovative', 'integrated', 'interactive', 'intuitive',
        'killer', 'leading-edge', 'magnetic', 'mission-critical',
        'next-generation', 'one-to-one', 'open-source', 'out-of-the-box',
        'realtime', 'revolutionary','fraternal', 'evangilical',
        'robust', 'scalable', 'seamless', 
        'strategic', 'synergistic', 'transparent', 'turn-key',
        'user-centric', 'value-added', 'vertical', 'neat' ];
            
       $scope.verbs = [ 'Wrote', 'benchmark', 'built',
              'deliver', 'deploy', 'design', 'develop',
              're-enable', 'enable', 'engineer',
              'enhance', 'expedite', 'debugg', 'extend',
              'facilitate', 'generate','implement',
              'innovate', 'integrate', 'communicate',
              'leverage',  'maximize', 'mesh',  'morph',
              'optimize', 'produce','redefine',  'reinvent', 
              'scale', 're-test', 'test', 'transform', 'transition',
              'utilize', 'visualize', 'whiteboard'
              ];

    $scope.showNouns = function() { 
        $scope.mygoals = [ { name: "Nouns", items: $scope.bs_statements} ];
    }
           
    $scope.showAdjectives = function() { 
        $scope.mygoals = [ { name: "Adjectives", items: $scope.adjectives } ];
    }

 
   $scope.makeReport = function() {
  $scope.mygoals = [  ];
   for (prj in $scope.projects) {
        var nlines = parseInt((Math.random() * 3) + 4);
        var ostr = "";
        for (var nl=0; nl < nlines; nl++) {
            kv = Math.floor(Math.random() * $scope.verbs.length) ;    
            ka = Math.floor(Math.random() * $scope.adjectives.length) ;    
            ki = Math.floor(Math.random() * $scope.actionItems.length) ;    
            kn = Math.floor(Math.random() * $scope.nouns.length) ;    
            km = Math.floor(Math.random() * $scope.nouns.length) ;    
            kf = Math.floor(Math.random() * $scope.fillers.length) ;
            bs = Math.floor(Math.random() * $scope.bs_statements.length); 
            verb = $scope.verbs[kv];
            
            bsn = Math.floor(Math.random() * 10);
            if (bsn >= 3 ){
              ostr += $scope.bs_statements[bs];
            }

            ostr +=   verb + ' ' + $scope.adjectives[ka] + ' ' + 
                $scope.actionItems[ki] + ' ' + $scope.nouns[kn] 
                + ' ' + $scope.fillers[kf] + ' ' 
                + $scope.nouns[km] + '. ';
                  
          }


        $scope.mygoals.push({name: $scope.projects[prj], items: ostr});
        }
    }

    $scope.makeReport(); 

});
