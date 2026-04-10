from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class ModelTestCase(TestCase):
    def test_user_creation(self):
        user = User.objects.create(name='Test User', email='test@example.com', team='marvel')
        self.assertEqual(user.name, 'Test User')
        self.assertEqual(user.email, 'test@example.com')
        self.assertEqual(user.team, 'marvel')

    def test_team_creation(self):
        team = Team.objects.create(name='marvel', description='Marvel Team')
        self.assertEqual(team.name, 'marvel')
        self.assertEqual(team.description, 'Marvel Team')

    def test_activity_creation(self):
        activity = Activity.objects.create(user='Test User', type='run', duration=30, date='2024-01-01')
        self.assertEqual(activity.type, 'run')
        self.assertEqual(activity.duration, 30)

    def test_leaderboard_creation(self):
        leaderboard = Leaderboard.objects.create(team='marvel', points=100)
        self.assertEqual(leaderboard.team, 'marvel')
        self.assertEqual(leaderboard.points, 100)

    def test_workout_creation(self):
        workout = Workout.objects.create(name='Pushups', description='Do pushups', difficulty='easy')
        self.assertEqual(workout.name, 'Pushups')
        self.assertEqual(workout.difficulty, 'easy')
