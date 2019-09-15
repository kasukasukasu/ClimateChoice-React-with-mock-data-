import React, {Component} from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./TaskItem.css";

class TaskItem extends Component {
    render() {
        var tasks = this.props.tasks.map(function (task) {
            return (
                <ExpansionPanel key={task.id}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="title" className="title">
                            <p className="title">{task.title}</p></Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="headline">
                            <p className="cardContentHeader2">Tehtävä:</p>
                            <p>{task.body.content1}</p>
                            <hr/>
                            <p className="cardContentHeader2">Lisätietoja:</p>
                            <p>{task.body.content2}</p>
                            <hr/>
                            <p className="cardContentHeader2">Haasteen vaikuttavuus:</p>
                            <p>-{task.body.rating}kg hiilidioksidipäästöjä vuodessa.</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )
        });
        return (
            <div className="list-items">{tasks}<br></br><br></br><br></br><br></br></div>
        )
    }
}

export default TaskItem;