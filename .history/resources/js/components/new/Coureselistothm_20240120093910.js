import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactDOM from 'react-dom';

export default function Coureselistothm() {
   
   
  return (
    <div>
       <Navbar/>
       <main>
            <section className="shop-main container d-flex pt-4 pt-xl-5">
                <div className="shop-sidebar side-sticky bg-body" id="shopFilter">
                    <div className="aside-header d-flex d-lg-none align-items-center">
                        <h3 className="text-uppercase fs-6 mb-0">Filter By</h3>
                        <button className="btn-close-lg js-close-aside btn-close-aside ms-auto"></button>
                    </div>
                    <div className="pt-4 pt-lg-0"></div>

                    <div class="accordion" id="brand-filters">
					<div class="accordion-item mb-4 pb-3">
						<h5 class="accordion-header" id="accordion-heading-brand">
							<button class="accordion-button p-0 border-0 fs-5 text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-filter-brand" aria-expanded="true" aria-controls="accordion-filter-brand">
								Order By
								<svg class="accordion-button__icon type2" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
									<g aria-hidden="true" stroke="none" fill-rule="evenodd">
										<path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z"/>
									</g>
								</svg>
							</button>
						</h5>
						<div id="accordion-filter-brand" class="accordion-collapse collapse show border-0" aria-labelledby="accordion-heading-brand" data-bs-parent="#brand-filters">
							<div class="search-field multi-select accordion-body px-0 pb-0">
								<select class="d-none" multiple name="total-numbers-list">
									<option value="asc">ASC</option>
									<option value="desc">DESC</option>
								</select>
								
								<ul class="multi-select__list list-unstyled">
									<li class="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
										<span class="me-auto">ASC</span>
									</li>
									<li class="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
										<span className="me-auto">DESC</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

                </div>
            </section>
        </main>


        <Footer />
    </div>
  );

}

if(document.getElementById('courselistothm')){
ReactDOM.render(<Coureselistothm/>, document.getElementById('courselistothm'))
}
