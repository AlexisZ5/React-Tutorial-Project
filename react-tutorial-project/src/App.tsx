import React, { useState } from 'react';
import ListGroup from './Components/ListGroup';
import Alert from './Components/Alert';
import Button from './Components/Button';
import ButtonAlert from './Components/ButtonAlert';

function App() {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ]

    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    const [alertVisible, setAlertVisibility] = useState(false);
    const handleClick = () => {
    }
    return <div>
        {alertVisible && <Alert onClose={() => setAlertVisibility(false) }>
            fuck <span>you</span>
        </Alert>}
        <Button color="warning" onClick={() => setAlertVisibility(true)}>ABAB</Button>
        <ButtonAlert>Text</ButtonAlert>
    </div>
//    <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /></div>
}
export default App;