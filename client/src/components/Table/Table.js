import React from "react";
import { Link } from "react-router-dom";
import "./Table.css";
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter, ImageHeader,} from "react-simple-card";


const Table = () => (
  <Card>
<div container>
    <div class="cards">
    <div class="grade3">
    <a href="/grade3">
    <img id="cover" src="/images/books/3rdGrade.jpg" /></a>
    <div class="linklink"><Link to="/grade3">Grade 3 </Link>
    </div>
    </div>

    <div class="grade4">
    <a href="https://www.w3schools.com">
    <img id="cover" src="/images/books/4thGrade.jpg" /></a>
    <div class="linklink"><Link to="/grade4">Grade 4 </Link>
    {/* <CardBody>Click for Lesson Plans</CardBody> */}
    </div>
    </div>

<div class="grade5">
<a href="https://www.w3schools.com">
<img id="cover" src="/images/books/5thGrade.jpg" /></a>
    <div class="linklink"><Link to="/grade5">Grade 5</Link>
    {/* <CardBody>Click for Lesson Plans</CardBody> */}
    </div>
</div>

<div class="grade6">
<a href="https://www.w3schools.com">
<img id="cover" src="/images/books/6thGrade.jpg" /></a>
    <div class="linklink"><Link to="/grade6">Grade 6</Link>
    {/* <CardBody>Click for Lesson Plans</CardBody> */}
    </div>
</div>

<div class="grade7">
<a href="https://www.w3schools.com">
<img id="cover" src="/images/books/7thGrade.jpg" /></a>
    <div class="linklink"><Link to="/grade7">Grade 7</Link>
    {/* <CardBody>Click for Lesson Plans</CardBody> */}
    </div>
</div>

<div class="grade8">
<a href="https://www.w3schools.com">
<img id="cover" src="/images/books/8thGrade.jpg" /> </a>
    <div class="linklink"><Link to="/grade8">Grade 8</Link> 
    {/* <CardBody>Click for Lesson Plans</CardBody> */}
    </div>
</div>
</div>
</div>

</Card>
);


export default Table;


