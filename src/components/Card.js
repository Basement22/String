import React from "react";
import { emphasize, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CardHeader from "@material-ui/core/CardHeader";
import StarIcon from "@material-ui/icons/Star";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { green, yellow } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { FormatItalic, MicNone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    "&:hover": {
      background: "none",
    },
    marginTop: -35,
    marginRight: 5,
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  subtitle: {
    color: "#F3C92A",
    fontWeight: 500,
  },
  star: {
    color: "#F3C92A",
  },
  rating: {
    fontSize: 16,
    color: "#F3C92A",
    marginLeft: 5,
    fontWeight: 600,
  },
  keyHeading: {
    "&:hover": {
      fontFamily: "Times New Roman",
      color: "rgb(26, 146, 109)",
      fontStyle: "italic",
      transition: "transform 0.3s ease",
      cursor: "pointer",
    },
  },
  button: {
    marginTop: -15,
    marginLeft: 5,
    textTransform: "none",
    background: "rgb(8, 129, 129)",
    marginBottom: 20,
    "&:hover": {
      background: "rgb(8, 129, 129)",
    },
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: green[500],
  },
}));

export default function RecipeReviewCard({
  image,
  title,
  avatar,
  typography,
  rating,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            alt="sorry-avatar!"
            src={avatar}
          />
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={title}
        // subheader="September 14, 2016"
      />
      <CardMedia className={classes.media} image={image} title="Paella dish" />
      <CardContent>
        <Typography
          variant="subtitle1"
          className={classes.subtitle}
          component="h4"
        >
          Top Rated Seller
        </Typography>
        <Typography
          variant="h6"
          className={classes.keyHeading}
          color="textprimary"
          component="h4"
        >
          {typography}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          color="secondary"
          disableRipple
          className={classes.button}
          //   startIcon={<DeleteIcon />}
        >
          Hire Me!
        </Button>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          //   onClick={handleExpandClick}
          //   aria-expanded={expanded}
          //   aria-label="show more"
        >
          <StarIcon className={classes.star} />
          <p className={classes.rating}>{rating}</p>
        </IconButton>
      </CardActions>
    </Card>
  );
}
