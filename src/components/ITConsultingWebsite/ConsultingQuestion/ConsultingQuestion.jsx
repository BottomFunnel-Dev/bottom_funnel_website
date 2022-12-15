import React from 'react';
import "./ConsultingQuestion.css";

export const ConsultingQuestion = () => {
    return (
        <div className='consultingQuestionParentDiv'>
            <div className='consultingQuestionBackImage'>
                <img src='/Images/ItConsulting/RedOrange Background.png' alt='image' />
            </div>
            <div className='consultingQuestionContentMainDiv'>
                <div className='consultingQuestionContentTextDiv'>
                    <h1> Got Questions ?</h1>

                    <div></div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ratione perferendis laudantium at iste doloribus omnis. Error sint ducimus reiciendis quis, numquam eius rerum tempora non consectetur autem sequi veniam?
                    </p>
                </div>
                <div className='consultingQuestionContentButtonDiv'>
                    <button> Contact Us </button>
                </div>
            </div>
        </div>
    )
}
