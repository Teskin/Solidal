import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createProduct} from '../actions';

// Field component is a React component which is wired up with redux form.
// reduxForm is a function is very similar to the connect helper of React-Redux.
// It allows our component to talk directly to the redux store.

class ProductNew extends React.Component {
    // Conventional field object parameter contains some event handlers we need to wire up to the JSX.
    renderFieldText(field) {
        // Destructuring
        const {
            meta: {
                touched,
                error
            }
        } = field;

        return (<div>
            {/* // The field component does not recognize magically the input tag. */}
            {/* We use the notation below to make that connection. */}
            {/* ... dots help us to get all the properties needed in field.input without writing
        each props such as field.input.onChange; */}

            <label>{field.label}</label>
            {/* // This meta property is automatically added to the field object from
      our validate function. */}
            <input type="text" {...field.input} />

            {/* Touched already managed by Redux Form */}
            <span>
                {touched ? error : ''}
            </span>
        </div>);
    }

    renderFieldNumber(field) {

        // Destructuring
        const {
            meta: {
                touched,
                error
            }
        } = field;

        return (<div>
            {/* // The field component does not recognize magically the input tag. */}
            {/* We use the notation below to make that connection. */}
            {/* ... dots help us to get all the properties needed in field.input without writing
        each props such as field.input.onChange; */}

            <label>{field.label}</label>
            {/* // This meta property is automatically added to the field object from
      our validate function. */}
            <input type="number" {...field.input} />

            {/* Touched already managed by Redux Form */}
            <span>
                {touched ? error : ''}
            </span>
        </div>);
    }

    // React-Router comes with many different helpers that you may utilize. For this case, it is appropriate
    // using history as we need an automatic callback function that renders the previous page as the POST
    // has been made accordingly. With 'push' props onSubmit the user will be redirected automatically to the main page.
    // createPost has a callback function that can be added as second parameter.
    onSubmit(values) {

        console.log(values);
        // this === component
        this.props.createProduct(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        // When we wired up Redux Form like you would do with react
        // we connected tons of properties as well... like this one.
        const {handleSubmit} = this.props;

        // Redux Form is responsible only for the state and validation of our form.
        // We are using bind as we are going to use onSubmit function outside this component.
        return (<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            {/* // Field is only in charge to communicate with Redux Form. The React component associate will have to render
      the field properly. */}

            {/* We do not write this.renderTitleField() as Redux Form decides when to call the function automatically. */}
            <Field label="Nome Prodotto" name="name" component={this.renderFieldText}/>
            <Field label="Descrizione" name="description" component={this.renderFieldText}/>
            <Field label="Prezzo" name="price" component={this.renderFieldNumber}/>
            <Field label="Categoria" name="category" component={this.renderFieldNumber}/>

            <button type="submit">Submit</button>
            <Link to="/">Cancel</Link>
        </form>)
    }
}

// Validate will be called automatically by Redux Form when needed.
function validate(values) {

    const errors = {};


    // IMPORTANT: the names of this object attributes are strictly connected to the name's properties of each Field component.
    // Furthermore Field will look for any error with the same name of the field itself.

    // Validate the inputs from 'values'
    if (!values.name) {
        errors.name = "Inserire nome dell'azienda"
    }

    if (!values.description) {
        errors.description = "Inserire descrizione";
    }
    
    if (!values.price) {
        errors.price = "Inserire descrizione";
    }  
    
    if (!values.category) {
        errors.category = "Inserire descrizione";
    }

    return errors;
}


// Stacked up multiple connect helpers.
// We intend 'form' as name of the form. You may want to show multiple forms on a single page.
export default reduxForm({
    validate,
    form: "NewProductForm"
})(connect(null, {createProduct})(ProductNew));


// if you create another component e.g. posts-edit.js the reduxForm would merge together.
// export default reduxForm({
//   form: 'PostsEditForm'
// })(PostsEdit);