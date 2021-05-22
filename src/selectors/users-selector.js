import { createSelector } from 'reselect';

export const usersSelector = state => state.users;

export const usersOptionsSelector = createSelector(
    usersSelector,
    (user) => Object
        .keys(user)
        .map((userName) =>
            ({label: user[userName].name, value:user[userName].id}))
)

export const authorUserSelector = (user) => createSelector(
    usersSelector,
    (users) => {
        return users ? users[user] : undefined;
    }
)
export const userLeaderBoardSelector = createSelector(
    usersSelector,
    (users) => users ?
        Object
            .keys(users)
            .reduce( (agg, userId) => {
                const user = users[userId];
                const answered = Object.keys(user.answers).length;
                const created =  user.questions.length;
                const score = answered + created;
                return [
                    ...agg,
                    {
                        name: user.name,
                        avatar: user.avatarURL,
                        answered,
                        created,
                        score
                    }]
            },[]).sort((a, b) => b.score - a.score)
        : []
);