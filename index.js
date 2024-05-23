(function(){
    let questiones=[
        {
            questions:"1]What are the higher order functions in the javascript",
            answer:{
                new: false,
                map: true,
                fetch: false,
                await: false
            }
        },{
            questions:"2]what the functions are",
            answer:{
                first_citize_in_javascript: true,
                not_important: false,
                rather_to_say: true,
                none:false,
            }
        }, {
            questions:"3]const and let belongs which scope",
            answer:{
                local: false,
                global: true,
                function_scope: false,
                none_of_the_above: false
            }
        },{
            questions:"4]var belongs to which scope",
            answer:{
                function_scope: true,
                global_scope: false,
                none_of_the_above: true,
                rather_to_say:false,
            }
        },
       
        
        
    ];

    let questions_element=document.querySelector(".question_element");
    let next_button=document.querySelector(".plus");
    let answer_element=document.querySelector(".answers");
    let check_answer=document.querySelector(".check_answer");
    let question_number=0;
    let count=0;
    let progress_bar = document.querySelector(".progress_bar");
    function question_display() {
        if (question_number < questiones.length) {
            let question_index = questiones[question_number].questions;  
            let answer_index = questiones[question_number].answer;
            questions_element.innerHTML = "";
            answer_element.innerHTML = "";
            let para = document.createElement("p");
            para.innerHTML = question_index;
            questions_element.appendChild(para);
            for (let val in answer_index) {  
                let ans_para = document.createElement("p");
                ans_para.innerHTML = val;
                answer_element.appendChild(ans_para);
                ans_para.addEventListener("click", () => {
                    event.preventDefault();
                    if (answer_index[val] === true) {   
                        count++;
                        check_answer.addEventListener("click", () => {
                            
                            let width_progress = `${(count / (questiones.length)) * 100}%`;
                            progress_bar.style.width = width_progress;
                            progress_bar.innerHTML = width_progress;
                        });
                    }
                });
            }
            increment();
        } else {
            showCompletionMessage();
        }
    } 

    function increment() {
        next_button.addEventListener("click", () => { 
            event.preventDefault();
            question_number++;
            question_display(question_number);
        });
    }

    function showCompletionMessage() {
        questions_element.innerHTML = "Thanks for Completion! and your score is "+count;
        questions_element.style.width="100%"
        questions_element.style.height="100%";
        questions_element.style.display="flex"
        questions_element.style.justifyContent="center"
        questions_element.style.alignItems="center"
        answer_element.innerHTML = "";
        next_button.style.display = "none";
        check_answer.style.display = "none";
        let progress_bar = document.querySelector(".progress_bar");
        progress_bar.style.display = "none";
        let upgrader=document.querySelector(".score_upgrade")
        upgrader.style.display="none"
    }

    question_display();
})();
