import React,{Component} from 'react';
import './Jumbtron.css';
import  {Modal,ModalBody,ModalHeader,Button,FormGroup,Form,Input,Label,Col} from 'reactstrap';




class Jumbtron extends Component {

  constructor(props){
    super(props);

     this.state={
           isModalOpen:false
     }


     this.toggleModal=this.toggleModal.bind(this);
     this.handleLogin=this.handleLogin.bind(this);
  }


toggleModal(){
  this.setState({
    isModalOpen:!this.state.isModalOpen
  })
}
 handleLogin(event) {
        this.toggleModal();
        alert("اسم العميل " + this.username.value +  " تم أختيار وجبة : " +   this.dish.value + "رقم تليفون العميل : "    +  this.telnum.value
            + " تذكرنى: " + this.remember.checked);
        event.preventDefault();

    }
 
 handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        
    }
  render() { 
    return ( 
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
              <div className="row">
                  <div className="col-md-6 col-sm-12 logo">
                      <img src="././imgs/logo.jpg" width="200" height="200"/>
                </div>
                  <div className="col-md-6 col-sm-12 delivery">
                        <p className="para">  خدمة التوصيل <span>16455</span>  ...  أستمتع بطعم السعادة فى كل وجبة</p>
                          <button className="btn btn-warning reserve-btn" onClick={this.toggleModal}>  <span>16455</span> أطلب الأن</button>
              </div>
          </div>
          </div>
        </div>
         
         <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
           <ModalHeader>أطلب الأن </ModalHeader>
           <ModalBody>
             <Form onSubmit={this.handleLogin}>
                            <FormGroup row>
                                <Label htmlFor="username" md={2}>أسم العميل</Label>
                                <Col md={10}>
                                    <Input type="text" id="username" name="username"
                                        placeholder="أسم العميل"
                                        onChange={this.handleInputChange}
                                        innerRef={(input) => this.username = input} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="telnum" md={2}>رقم الهاتف</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="رقم التليفون"
                                        onChange={this.handleInputChange}
                                       innerRef={(input) => this.telnum = input}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6}}>
                                    <FormGroup check>
                                        <Label check>
                                           
                                               <span><strong>أختر الوجبة:</strong></span>  
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 6}}>
                                    <Input type="select" name="dish"
                                    onChange={this.handleInputChange}
                                            innerRef={(input) => this.dish = input}>
                                        <option>ميكس السعادة</option>
                                        <option>4 Double Sandwiches</option>
                                        <option> Supper Offer</option>
                                        <option>2 Double Sandwiches</option>
                                        <option>Triple Offer</option>
                                        <option>لمة السعادة</option>
                                        <option>وجبة السعادة</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    onChange={this.handleInputChange}
                                    innerRef={(input) => this.remember = input}  />
                                    تذكرنى
                                </Label>
                            </FormGroup>
                             <FormGroup >
                            <Button type="submit" value="submit" color="danger">تأكيد الطلب</Button>
                            </FormGroup>
                        </Form>
           </ModalBody>
         </Modal>
      
     </>  
     );
  }
}
 
export default Jumbtron;
