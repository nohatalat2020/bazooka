import React from 'react';

const Info = () => {
    return (  
        <div className="container">
            <div className="row about-us">
                <div className="info-paragraph col-md-6 col-sm-12 order-md-first">
                  <h2>معلومات عنا</h2>
                  <hr/>
                  <p className="lead">نستمتع بتقديم ألذ وصفات الدجاج المقلى  سواء وجبات كاملة أو شطائر الهمبرجر اللذيذة نقوم الأن بغو أماكن متفرقة فى مصر لتوسيع نشاطنا وتقديم أفضل خدمة لعملائنا الكرام</p>
                </div>
                 <div className="info-video col-md-6 col-sm-12 order-md-last">
                     <img src="././imgs/info.jpg" alt="public clients"/>
                </div>
            </div>
            <div className="places">
                <div> <h2><i className="fa fa-motorcycle" aria-hidden="true"></i>
                    أماكن التوصيل<i className="fa fa-motorcycle" aria-hidden="true"></i>
                   </h2><hr/></div>
                <div className="img">
                    <img src="././imgs/places.jpg" alt="where you can find us"/>
                </div>
            </div>
        </div>
    );
}
 
export default Info;