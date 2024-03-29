/*

    Description___________________________________________________

    Performs an insignificant alteration to a given DOM element,
    thus generating an update to the React component that contains
    the aforementioned element (and replays the animation on it).


    Instructions__________________________________________________

    Please insert the styling/code from the 'style.css' file into
    the CSS file linked to your project.


    Sidenote_______________________________________________________
    
    Under the hood this function moves the given DOM element
    0.00001px to the right on the X-axis and back.
    
    It takes 1ms for the addition and removal of the necessary class.
*/

const Reanimate = DOM => {

    // Check if given DOM parameter is valid or not
    if (DOM) {

        // Add an insignificant alteration to update the component
        DOM.classList.add('Reanimate');

        // Clean up after the triggering took place
        setTimeout(() => {
            DOM.classList.remove('Reanimate');
        }, 1);
    }
};

export default Reanimate;