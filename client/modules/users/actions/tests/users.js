const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../users';

describe('users.actions.users', () => {
  it('should redirect user to the post', () => {
    const id = 'dsds';
    const Meteor = {uuid: () => id, call: stub()};
    const LocalState = {set: spy()};
    const FlowRouter = {go: spy()};
    Meteor.call.callsArg(4);

    actions.create({Meteor, LocalState, FlowRouter}, 'test@example.com', 'password');
    expect(FlowRouter.go.args[0][0]).to.be.equal(`/`);
  });
});