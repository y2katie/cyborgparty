import React from "react";
import { Grid, Icon, Label, Container, Image, Header } from "semantic-ui-react";

const WalkThrough = (props) => {
  return (
    <>
      <Container centered style={{ marginTop: "100px" }}>
        <Grid centered>
          <Grid.Column centered width={8}>

            <h3> {props.projectHeader} </h3>
            <Label as="a" color="teal" tag>
              Hot & New
            </Label>
            <h1> {props.projectExplainer} </h1>
            <p> {props.login} </p>
            <br />
            <p>
            <Header as='h3' block>
               {props.problemContent}
              </Header>

            </p>
            <p> {props.solution} </p>
            <p><Icon name='check' size='small' /> {props.problemContent1} </p>
            <br />
            <p><Icon name='check' size='small' /> {props.problemContent2} </p>
            <br />

            <p>               <Icon name='check' size='small' />
 {props.problemContent3} </p>

            <br />
            <p>
              {" "}

              <b> {props.solutionContent1} </b>{" "}
            </p>
            <img style={{ width: "100%" }} src={props.img1} />

            <Image
              label={{
                as: "a",
                color: "teal",
                content: "Setting up a netcat listener",
                ribbon: true,
              }}
              style={{ width: "100%" }}
              src={props.img2}
            />
            <br />

            <p> {props.solutionContent2} </p>
            <Image
              label={{
                as: "a",
                color: "teal",
                content: "Verifying netcat connection",
                ribbon: true,
              }}
              style={{ width: "100%" }}
              src={props.img3}
            />

            <br />
            <p>
 {props.solutionContent3} </p>
            <Image
              label={{
                as: "a",
                color: "teal",
                content: "Serving the file to my IP address",
                ribbon: true,
              }}
              style={{ width: "100%" }}
              src={props.img4}
            />
            <br />
            <p> {props.solutionContent4} </p>
            <img style={{ width: "100%" }} src={props.img5} />

            <br />

            <p> {props.solutionContent5} </p>
            <Image style={{ width: "100%" }} src={props.img6} />
            <Label circular color={"red"} key={"red"}>
              2
            </Label>
            <br />

            <p> {props.solutionContent6} </p>
            <img style={{ width: "100%" }} src={props.img5} />

            <p> {props.solutionContent7} </p>
            <img style={{ width: "100%" }} src={props.img7} />
            <br />
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default WalkThrough;
