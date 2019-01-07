import React from "react";
import Context from "./context.js";
import { Table, IconButton, Avatar } from "evergreen-ui";

class Tables extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {ctx => {
          return (
            <React.Fragment>
              <div className="table">
                <div className="Files">Files</div>
                <Table>
                  <Table.Head>
                    <Table.TextCell
                      flexBasis={65}
                      flexShrink={0}
                      flexGrow={0}
                    />
                    <Table.TextHeaderCell>Name</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Uploaded At</Table.TextHeaderCell>
                    <Table.TextHeaderCell>File Size</Table.TextHeaderCell>
                    <Table.TextCell
                      flexBasis={110}
                      flexShrink={0}
                      flexGrow={0}
                    />
                  </Table.Head>
                  <Table.Body height={240}>
                    {ctx.value.map(item => (
                      <Table.Row
                        key={item.id}
                        isSelectable
                        onSelect={() => alert(item.name)}
                      >
                        <Table.TextCell
                          flexBasis={65}
                          flexShrink={0}
                          flexGrow={0}
                        >
                          <Avatar
                            name="Bill Gates"
                            size={40}
                            marginRight={16}
                          />
                        </Table.TextCell>
                        <Table.TextCell>{item.name}</Table.TextCell>
                        <Table.TextCell>{item.uploadedAt}</Table.TextCell>
                        <Table.TextCell>{item.fileSize}</Table.TextCell>
                        <Table.TextCell
                          flexBasis={55}
                          flexShrink={0}
                          flexGrow={0}
                        >
                          <IconButton icon="download" intent="success" />
                        </Table.TextCell>
                        <Table.TextCell
                          flexBasis={55}
                          flexShrink={0}
                          flexGrow={0}
                        >
                          <IconButton icon="trash" intent="danger" />
                        </Table.TextCell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </div>
            </React.Fragment>
          );
        }}
      </Context.Consumer>
    );
  }
}
export default Tables;
