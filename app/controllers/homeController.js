angular.module('portfolioApp')
    .controller('HomeController', ['$scope', 'NavigationService', function($scope, NavigationService) {
        // Dados pessoais
        $scope.personal = {
            name: 'Cláudio Souza',
            role: 'Desenvolvedor Full Stack',
            about: 'Sou desenvolvedor Full Stack em formação, cursando Análise e Desenvolvimento de Sistemas, com sólida base em C#, .NET e SQL. Tenho experiência prática adquirida através de projetos pessoais, estudos independentes e participação em cursos como "Introdução ao Desenvolvimento com C#" da Udemy. Atuo tanto no front-end quanto no back-end, com foco em boas práticas, orientação a objetos e soluções eficientes. Também pratico desafios de programação em plataformas como HackerRank e LeetCode, buscando constantemente evoluir minhas habilidades em lógica e desenvolvimento de software. Sou proativo, comunicativo e tenho facilidade para aprender novas tecnologias e trabalhar em equipe.',
            cv: 'images/pdfs/CV_Claudio_Souza.pdf'
        };

        // Links de redes sociais
        $scope.socialMedia = [
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/claudio-elias/',
                icon: 'fa-brands fa-linkedin'
            },
            {
                name: 'GitHub',
                url: 'https://github.com/Claudioofc',
                icon: 'fa-brands fa-github'
            },
            {
                name: 'WhatsApp',
                url: 'https://wa.me/5538992366394',
                icon: 'fa-brands fa-whatsapp'
            },
            {
                name: 'Email',
                url: 'mailto:claudioelias12@gmail.com',
                icon: 'fa-solid fa-envelope'
            }
        ];

        // Habilidades
        $scope.skills = [
            {
                name: 'C#',
                icon: 'fa-solid fa-code'
            },
            {
                name: '.Net',
                icon: 'fa-solid fa-server'
            },
            {
                name: 'SQL Server',
                icon: 'fa-solid fa-database'
            },
            {
                name: 'JavaScript',
                icon: 'fa-brands fa-js'
            },
            {
                name: 'Node.js',
                icon: 'fa-brands fa-node-js'
            },
            {
                name: 'AngularJS',
                icon: 'fa-brands fa-angular'
            },
            {
                name: 'Bootstrap',
                icon: 'fa-brands fa-bootstrap'
            },
            {
                name: 'HTML5',
                icon: 'fa-brands fa-html5'
            },
            {
                name: 'CSS3',
                icon: 'fa-brands fa-css3-alt'
            },
            {
                name: 'Front-end',
                icon: 'fa-solid fa-code'
            },
            {
                name: 'Back-end',
                icon: 'fa-solid fa-file-code'
            }
        ];

        // Navegação
        $scope.navItems = [
            { name: 'Início', href: '#home', active: true },
            { name: 'Sobre mim', href: '#about', active: false },
            { name: 'Minhas Habilidades', href: '#skills', active: false },
            { name: 'Certificados', href: '#certificates', active: false },
            { name: 'Projetos', href: '#projects', active: false }
        ];

        // Função para scroll suave
        $scope.scrollTo = function(elementId) {
            const element = document.getElementById(elementId.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };

        // Toggle do menu mobile
        $scope.toggleMenu = function() {
            const menuIcon = document.querySelector('#menu-icon');
            const navbar = document.querySelector('.navbar');
            
            menuIcon.classList.toggle('fa-xmark');
            navbar.classList.toggle('active');
        };

        // Função para definir item ativo na navegação
        $scope.setActiveNav = function(item) {
            $scope.navItems.forEach(nav => nav.active = false);
            item.active = true;
        };

        // Certificados
        $scope.certificates = [
            {
                title: 'Certificado Ada Tech - I',
                url: 'https://ada.tech/certificado?code=2fed577b-2dee-8503-1f0f-e7ff30ee7f62',
                institution: 'Ada Tech'
            },
            {
                title: 'Certificado Ada Tech - II',
                url: 'https://ada.tech/certificado?code=d3e98f25-4c32-a811-78ff-e12da22733ec',
                institution: 'Ada Tech'
            },
            {
                title: 'Certificado Ada Tech - III',
                url: 'https://ada.tech/certificado?code=d3f1d198-2f5f-a501-fa7f-a0a7a32499e0',
                institution: 'Ada Tech'
            },
            {
                title: 'Certificado Ada Tech - IV',
                url: 'https://ada.tech/certificado?code=046a8526-3cb7-8966-218e-9dbab507431b',
                institution: 'Ada Tech'
            },
            {
                title: 'Certificado Udemy - I',
                url: 'https://www.udemy.com/certificate/UC-8f2c5d58-642b-4564-828a-d27dafa0e51c/',
                institution: 'Udemy'
            },
            {
                title: 'Certificado Udemy - II',
                url: 'https://www.udemy.com/certificate/UC-256e816a-546f-4474-9fff-36ac40cc7606/',
                institution: 'Udemy'
            },
            {
                title: 'Certificado Udemy - III',
                url: 'https://www.udemy.com/certificate/UC-b5fb3978-b413-46cf-b56a-92f594596b46/',
                institution: 'Udemy'
            }
        ];

        // Projetos
        $scope.projects = [
            {
                title: 'Romeiro e Lacerda',
                description: 'Site institucional para clínica odontológica especializada em estética e reabilitação oral',
                url: 'https://romeiroelacerda.com.br/',
                technologies: ['AngularJS', 'HTML5', 'CSS3', 'JavaScript'],
                type: 'Website Institucional'
            },
            {
                title: 'Portfolio Cafeteria',
                description: 'Website responsivo para cafeteria com design moderno, apresentando produtos e localização',
                url: 'https://portfoliocafeteria.netlify.app/',
                technologies: ['HTML5', 'CSS3', 'JavaScript'],
                type: 'Website Comercial'
            }
        ];

        // Função para visualizar CV
        $scope.viewCV = function() {
            window.open($scope.personal.cv, '_blank');
        };

        // Função para abrir certificado
        $scope.openCertificate = function(url) {
            window.open(url, '_blank');
        };

        // Função para abrir projeto
        $scope.openProject = function(url) {
            window.open(url, '_blank');
        };

        // Inicializar serviços na inicialização do controlador
        $scope.$on('$viewContentLoaded', function() {
            NavigationService.init();
        });
    }]); 