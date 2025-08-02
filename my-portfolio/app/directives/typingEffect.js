angular.module('portfolioApp')
    .directive('typingEffect', function() {
        return {
            restrict: 'A',
            scope: {
                text: '@'
            },
            link: function(scope, element, attrs) {
                const text = scope.text || 'Full Stack';
                let index = 0;
                let isDeleting = false;
                let currentText = '';
                
                function type() {
                    if (!isDeleting) {
                        currentText = text.substring(0, index + 1);
                        index++;
                        
                        if (index === text.length) {
                            setTimeout(() => {
                                isDeleting = true;
                            }, 2000);
                        }
                    } else {
                        currentText = text.substring(0, index - 1);
                        index--;
                        
                        if (index === 0) {
                            isDeleting = false;
                        }
                    }
                    
                    element.text(currentText);
                    
                    const speed = isDeleting ? 50 : 100;
                    setTimeout(type, speed);
                }
                
                // Iniciar o efeito após um pequeno delay
                setTimeout(type, 500);
            }
        };
    }); 