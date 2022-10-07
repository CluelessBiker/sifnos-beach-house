Supporting [documents](https://www.emailjs.com/docs/examples/reactjs/)

- Inside `index.html`:
```
<script type="text/javascript">
    (function(){
        emailjs.init("YOUR_PUBLIC_KEY");
    })();
    </script>
```

- Inside the form component:
 - Imports:
 ```
 import React, { useRef } from 'react';
 import emailjs from '@emailjs/browser';
 import { useHistory } from 'react-router-dom';
 ```
 - Inside the function:
```
const form = useRef();
    const history = useHistory();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text); 
        }, (error) => {
            console.log(error.text);
        });
        history.push('/');
    };
```
 - within the form tag:
 ```
 <form ref={form} onSubmit={sendEmail}>
 ```
 - form button:
 ```
 <button
    type="submit"
    value="send"
 >Send</button>
 ```

Setting up the email form, and site input fields:

- Each field inside the EmailJS form:
```
Phone number: {{from_number}}
```
- Should have a corresponding input field within the site contact form:
```
<input
    type="tel"
    name="from_number"
    placeholder="phone number*"
    required
/>
```