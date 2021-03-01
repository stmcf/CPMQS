import '../styles/home.css'



function Home() {
    return (
        <div class="grid-container">
        <div class="who-why">
            
            <div class="who-why-head">
            <header>
                <h1>Who we are...</h1>
            </header>
            </div>
            <div class="who-why-blurb">
            <article>
                <p>
                    CPM Quantity Surveying is an SME (Sub)Contractor focused consultancy offering commercial management services on a bespoke and ad-hoc basis.  Having spent a combined 30 years plus experience in commercial roles within the construction industry our management team realised that smaller contractors were under represented on commercial and contractual matters and were compelled to provide a solution. 
                </p>
                <p>  
                    We have decided to do things differently and, through a schedule of rates, agreed in advance, we offer the right level of consultant for each task essentially providing a full, on-demand commercial department from Junior QS’s and Commercial Assistants through to Commercial Managers.  This model ensure your business benefits from the knowledge, experience and supervision of our senior consultants without having to pay for them to carry out the day to day commercial tasks.     
                </p>                        
                </article>
            </div>
            <div class="who-why-contacts">
            
                <h1 className="contacts-title">Where we're based...</h1>
                <address>
                    <span>
                        Office 5, Gladstone Terrace<br />
                        11 Gladstone Place<br />
                        Stirling<br />
                        FK8 2NN
                    </span>
                </address>
                <address>
                    <span>
                        info@CPM-qs.co.uk
                    </span>
                </address>
                    
            
            </div>
        </div>
        <div class="image">
            
        </div>
        <div class="news-container">
            <article className="news-container-flex">
                <h1>Latest news and updates from CPM</h1>
                <ul>
                    CPM moves to new offices in Gladstone Place, Stirling...
                </ul>
                <ul>
                    CPM wins first major EV contract with EVCollective
                </ul>
            </article>
            {/* <button id="news.btn">Read More</button> */}
        </div>
        <div class="values-container">
        <article className="news-container-flex">
                <h1>CPM-QS's Values</h1>
                <p>
                    When our clients appoint us we take the responsibility seriously and will always ensure that we can demonstrate tangible financial benefits as a direct result of our appointment
                </p>
                <p>
                    We promise our clients that we will add value, efficiences or generate cost savings.
                </p>
                
            </article>
            {/* <button id="values.btn">Read More</button> */}
        </div>
        </div>


        // <div class="grid-container">
        //     <div class="who-why">
        //         <div class="who-why-title">
        //             <h3>Who we are</h3>
        //         </div>
            
        //         <div class="who-why-blurb">
        //             <article>
        //                 <p>
        //                     CPM Quantity Surveying is an SME (Sub)Contractor focused consultancy offering commercial management services on a bespoke and ad-hoc basis.  Having spent a combined 30 years plus experience in commercial roles within the construction industry our management team realised that smaller contractors were under represented on commercial and contractual matters and were compelled to provide a solution. 
        //                 </p>
        //                 <p>  
        //                     We have decided to do things differently and, through a schedule of rates, agreed in advance, we offer the right level of consultant for each task essentially providing a full, on-demand commercial department from Junior QS’s and Commercial Assistants through to Commercial Managers.  This model ensure your business benefits from the knowledge, experience and supervision of our senior consultants without having to pay for them to carry out the day to day commercial tasks.     

        //                 </p>
                        
        //             </article>
        //         </div>
        //     </div>
            
            
            
        //     <div class="image">
        //         <img src="'../images/james-sullivan-ESZRBtkQ_f8-unsplash.jpg" alt="" srcset=""/>
        //     </div>



        //     <div class="news-container">
        //         <div class="news-contactus"></div>
        //         <div class="news-li-feed"></div>
        //     </div>
        //     <div class="values-container"></div>



        // </div>

    
    );
};

export default Home;
