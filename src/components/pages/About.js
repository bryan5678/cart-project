import React, { Component } from 'react'
import { Container } from 'react-bootstrap';



class About extends Component {
    componentDidUpdate(){
        console.log("About componentDidUpdate")
    };

    componentDidMount(){
        console.log("About componentDidMount")
    }
    componentWillUnmount(){
        console.log("About componentWillUnmount")
        // console.log(this.state.cart)
        
    }
    render() {
        return (
        <>
            <h1 className="app">About</h1>
            <Container>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo voluptatum vel praesentium totam laudantium eos officiis ad obcaecati laboriosam alias vitae, ipsum a quasi maiores repellat molestias recusandae animi quisquam optio id est veritatis sunt. Doloribus quisquam nisi eaque perferendis doloremque repudiandae ad sit tempora praesentium dolorum sequi reprehenderit minus, tenetur ipsum autem nesciunt dicta necessitatibus assumenda. Nostrum praesentium aliquid cupiditate. Eius voluptas nulla, odit quidem perspiciatis non! Odio molestias error, unde, laudantium adipisci officiis architecto dolores, sequi autem soluta dolorem quas! Itaque minima deleniti deserunt voluptates ullam quasi earum architecto voluptatum iusto facilis perspiciatis animi repellat voluptate ducimus, odit ratione voluptatem consequuntur magnam eos inventore ipsa? Quas voluptatem, quibusdam dolor sint molestiae ipsa nihil eos amet consectetur laborum numquam quo dicta odio. Officiis iure maiores repudiandae perspiciatis recusandae iusto aspernatur cum corporis possimus! Expedita eligendi sit quis dicta? Explicabo, debitis. Assumenda doloribus accusamus deleniti iusto, nesciunt odio alias qui iste corporis maiores a odit expedita illum molestiae quibusdam ipsa aut pariatur officiis ducimus nam excepturi optio exercitationem, at recusandae! Aut expedita perspiciatis perferendis in esse voluptates asperiores, excepturi suscipit fugit omnis veritatis dicta quasi quo officia obcaecati debitis velit commodi optio exercitationem ad laudantium tenetur? Aperiam provident reiciendis, earum, beatae reprehenderit accusantium atque consectetur quaerat aut minima optio velit sed nihil adipisci voluptatibus hic sequi magnam laboriosam corrupti blanditiis!
                <br></br>
                 Alias assumenda doloribus, laudantium non est impedit suscipit consectetur? Iusto aliquam eius quos iure perferendis quasi culpa laboriosam. Dolores ipsam velit debitis omnis, asperiores amet, quibusdam facere doloribus cupiditate, eveniet accusantium ea error dolor nisi unde quos culpa voluptate? Rerum quos expedita impedit? Nemo cupiditate nesciunt neque odio molestias ipsam ut eius qui iure impedit, reprehenderit corporis harum, ipsum possimus natus nostrum veritatis quasi voluptatibus. Laborum tenetur magnam neque voluptatibus, beatae nesciunt. Accusamus, ipsum temporibus incidunt dignissimos qui unde velit!</p>
            </Container>
        </>
            

        )
    }
}

export default About

