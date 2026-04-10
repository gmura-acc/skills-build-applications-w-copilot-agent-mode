from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from django.db import connection

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Clear all collections
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Teams
        marvel = Team.objects.create(name='marvel', description='Marvel Superheroes')
        dc = Team.objects.create(name='dc', description='DC Superheroes')

        # Users
        users = [
            User(name='Tony Stark', email='tony@marvel.com', team='marvel'),
            User(name='Steve Rogers', email='steve@marvel.com', team='marvel'),
            User(name='Bruce Wayne', email='bruce@dc.com', team='dc'),
            User(name='Clark Kent', email='clark@dc.com', team='dc'),
        ]
        for user in users:
            user.save()

        # Activities
        activities = [
            Activity(user='Tony Stark', type='run', duration=30, date='2024-01-01'),
            Activity(user='Steve Rogers', type='swim', duration=45, date='2024-01-02'),
            Activity(user='Bruce Wayne', type='cycle', duration=60, date='2024-01-03'),
            Activity(user='Clark Kent', type='fly', duration=120, date='2024-01-04'),
        ]
        for activity in activities:
            activity.save()

        # Leaderboard
        Leaderboard.objects.create(team='marvel', points=200)
        Leaderboard.objects.create(team='dc', points=180)

        # Workouts
        workouts = [
            Workout(name='Pushups', description='Do 20 pushups', difficulty='easy'),
            Workout(name='Situps', description='Do 30 situps', difficulty='medium'),
            Workout(name='Squats', description='Do 40 squats', difficulty='hard'),
        ]
        for workout in workouts:
            workout.save()


        # Djongo does not support raw MongoDB commands; unique constraint is enforced by the model.

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
