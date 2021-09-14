import { Button } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const QuestionsForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>Have a question ?</div>
      <form className={classes.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={classes.input}
        />
        <input
          type="email"
          name="name"
          placeholder="Email"
          className={classes.input}
        />
        <textarea
          placeholder="Your Comment"
          rows="7"
          className={classes.input}
        />
        <Button type="submit" className={classes.btn}>
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default QuestionsForm;
